from django.views.generic import TemplateView
from django.shortcuts import render

# TODO : rename to 'Map' domain name ?
class HomePageView(TemplateView):
    # form_class = MyForm
    data = { 'hello' : 42 }
    greetings = 'hello'
    # https://docs.djangoproject.com/en/4.2/topics/class-based-views/intro/#handling-forms-with-class-based-views
    initial = {"greetings": "hello"}
    template_name = "pages/home.html"
    def get_greetings(self):
        return "hello"

    def set_greetings(self, value):
      pass
        # self._text = value

    def get(self, request, *args, **kwargs):
        # form = self.form_class(initial=self.initial)
        return render(request, self.template_name) #, {"form": form})

    def get_context_data(self, **kwargs):
        # context = super(ContextMixin, self).get_context_data(**kwargs)
        # context.update(self.extra_context)
        return {"greetings": "hello"} 


class AddressePageView(TemplateView):
    template_name = "pages/address.html"
