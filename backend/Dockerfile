FROM python:3.8.0-alpine3.10

RUN apk add make automake gcc g++ python3-dev

RUN apk add --no-cache postgresql-libs \
    && apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev curl \
    && apk add --no-cache

ENV APP_DIR=/var/www/app \
    PYTHONBUFFERED=1

WORKDIR ${APP_DIR}

COPY requirements.txt ${APP_DIR}

RUN pip install -r requirements.txt

COPY rootfs /
COPY . ${APP_DIR}

RUN ./manage.py collectstatic --noinput \
    && python -m whitenoise.compress ./staticfiles/

EXPOSE 8000

ENTRYPOINT ["/entrypoint.sh"]

