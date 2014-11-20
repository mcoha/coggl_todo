from django.db import models

# Create your models here.
class Tasks(models.Model):
    note = models.CharField(max_length=400)
    due_date = models.DateTimeField('date due')
	