#!/bin/sh -e
hostname=$(hostname -f)

case "$1" in
    django)
        echo "Application: django"

        log_dir="/var/log/hourly/"${hostname}
        mkdir -p "${log_dir}"
        ./manage.py migrate

        case "$CONTAINER_ENVIRONMENT" in
            production)
                access_logfile="${log_dir}/django-access.log"
                error_logfile="${log_dir}/django-error.log"
                ;;
            *)
                access_logfile="-"
                error_logfile="-"
                ;;
        esac

        echo "Logging to: ${log_dir}"

        exec /usr/local/bin/gunicorn \
             config.wsgi:application \
             -c /var/www/app/config/gunicorn.py \
             --access-logfile "${access_logfile}" \
             --error-logfile "${error_logfile}" \
             -n django
        ;;
    dramatiq)
        echo "Application: Dramatiq"

        log_dir="/var/log/hourly/"${hostname}
        mkdir -p "${log_dir}"

        echo "Logging to: ${log_dir}"

        exec python manage.py rundramatiq \
            --queues default \
            --processes 1 \
            --threads 1 \
            --log-file=${log_dir}/dramatiq.log \
            --reload \
            -v 2
        ;;
    *)
        exec "$@"
        ;;
esac
