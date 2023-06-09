from django.views.generic import TemplateView

# TODO : rename to 'Map' domain name ?
class HomePageView(TemplateView):
    template_name = "pages/home.html"

class AddressePageView(TemplateView):
    template_name = "pages/address.html"
