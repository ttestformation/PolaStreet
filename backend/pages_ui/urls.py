from django.urls import path

from .views import AboutPageView
from domains.views import HomePageView, AddressePageView

urlpatterns = [
    path("", HomePageView.as_view(greetings="G'day"), name="home"),
    path("about/", AboutPageView.as_view(), name="about"),
    path("adress/", AddressePageView.as_view(), name="address"),
]
