from django.shortcuts import render

def calc_(request):
    return render(request, 'calculator.html')
