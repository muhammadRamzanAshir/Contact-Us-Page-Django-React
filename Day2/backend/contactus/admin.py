from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')  # Show these fields in admin panel
    search_fields = ('name', 'email', 'text')  # Enable search

# OR without the decorator
# admin.site.register(ContactMessage, ContactMessageAdmin)
