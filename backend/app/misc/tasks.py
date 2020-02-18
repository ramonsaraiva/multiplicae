import dramatiq


@dramatiq.actor(
    queue_name='default',
    max_retries=1,
)
def healthcheck():
    return 0
