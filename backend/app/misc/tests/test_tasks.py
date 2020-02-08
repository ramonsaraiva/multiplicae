from django.test import TestCase

from app.misc import tasks


class HealthcheckTest(TestCase):

    def test_healthcheck(self):
        self.assertEqual(tasks.healthcheck(), 0)
