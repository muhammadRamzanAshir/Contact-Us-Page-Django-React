from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
import logging
from .models import ContactMessage  # Import the model
logger  = logging.getLogger(__name__)

@api_view(['POST'])
def contact_form(request):
    name  = request.data.get('name')
    email = request.data.get('email')
    text  = request.data.get('text')
    
    # Send email (optional)
    # send_mail(
    #     f'New Contact Form Submission from {name}',
    #     text,
    #     email,
    #     ['ashirramzan2@gmail.com']
    # )
    ContactMessage.objects.create(name=name, email=email, text=text)
    return Response({
        "message":"Form submitted successfully!"
    })