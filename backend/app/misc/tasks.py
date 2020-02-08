import dramatiq


@dramatiq.actor(
    queue_name='rateme_default',
    max_retries=1,
)
def healthcheck():
    return 0
