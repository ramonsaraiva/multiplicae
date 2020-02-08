import multiprocessing
import os

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1

worker_class = 'sync'
if os.environ.get('CONTAINER_ENVIRONMENT') in ['local', 'ci']:
    reload = True
    workers = 1
    threads = 1
    timeout = 60 * 60 * 24  # 24 h
else:
    preload = True
