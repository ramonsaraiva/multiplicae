from django.http import HttpResponse

from .tasks import healthcheck as healthcheck_task


def healthcheck(request):
    healthcheck_task.send()
    return HttpResponse('healthy')
