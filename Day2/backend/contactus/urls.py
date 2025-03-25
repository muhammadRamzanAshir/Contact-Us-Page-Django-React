from django.urls import path
from .views import contact_form

urlpatterns = [
    path('api/contact/' , contact_form, name="contact_form")
]
