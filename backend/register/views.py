from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseRedirect
from .forms import registerForm

def register_view(request, *args, **kwargs):
    if request.method == "POST":
        form = registerForm(request.POST)
        form.save()
        return HttpResponseRedirect('/login/')
    else:
        form = registerForm()
    return render(request,'register.html',{'form':form})
