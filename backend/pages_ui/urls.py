from django.urls import path

from .views import HomePageView, AboutPageView, AddressePageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("about/", AboutPageView.as_view(), name="about"),
    path("adress/", AddressePageView.as_view(), name="address"),
]
