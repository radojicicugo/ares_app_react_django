"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from ares_server.views import RadojicicView
from grujic.views import GrujicView
from angelovski.views import AngelovskiView
from borko.views import BorkoView
from dinc.views import DincView
from jeremic.views import JeremicView
from mario.views import MarioView
from tomo.views import TomoView
from vlada.views import VladaView
from agent01.views import Agent01View
from agent02.views import Agent02View
from agent03.views import Agent03View
from agent04.views import Agent04View
from agent05.views import Agent05View
from agent06.views import Agent06View
from agent07.views import Agent07View
from agent08.views import Agent08View
from agent09.views import Agent09View
from agent10.views import Agent10View
from vane.views import VaneView


route22 = routers.SimpleRouter()
route22.register("", VaneView, basename='vaneview')

route21 = routers.SimpleRouter()
route21.register("", Agent10View, basename='agent10view')

route20 = routers.SimpleRouter()
route20.register("", Agent09View, basename='agent09view')

route19 = routers.SimpleRouter()
route19.register("", Agent08View, basename='agent08view')

route18 = routers.SimpleRouter()
route18.register("", Agent07View, basename='agent07view')

route17 = routers.SimpleRouter()
route17.register("", Agent06View, basename='agent06view')

route16 = routers.SimpleRouter()
route16.register("", Agent05View, basename='agent05view')

route15 = routers.SimpleRouter()
route15.register("", Agent04View, basename='agent04view')

route14 = routers.SimpleRouter()
route14.register("", Agent03View, basename='agent03view')

route13 = routers.SimpleRouter()
route13.register("", Agent02View, basename='agent02view')

route12 = routers.SimpleRouter()
route12.register("", Agent01View, basename='agent01view')

route11 = routers.SimpleRouter()
route11.register("", VladaView, basename='vladaview')

route10 = routers.SimpleRouter()
route10.register("", TomoView, basename='tomoview')

route9 = routers.SimpleRouter()
route9.register("", MarioView, basename='marioview')

route8 = routers.SimpleRouter()
route8.register("", JeremicView, basename='jeremicview')

route7 = routers.SimpleRouter()
route7.register("", DincView, basename='dincview')

route6 = routers.SimpleRouter()
route6.register("", BorkoView, basename='borkoview')

route5 = routers.SimpleRouter()
route5.register("", AngelovskiView, basename='angelovskiview')

route4 = routers.SimpleRouter()
route4.register("", GrujicView, basename='grujicview')

route3 = routers.SimpleRouter()
route3.register("", RadojicicView, basename='radojicicview')




urlpatterns = [
    path('admin/', admin.site.urls),
    path('dejan/', include(route4.urls)),
    path('ugljesa/', include(route3.urls)),
    path('angelovski/', include(route5.urls)),
    path('borko/', include(route6.urls)),
    path('dinc/', include(route7.urls)),
    path('jeremic/', include(route8.urls)),
    path('mario/', include(route9.urls)),
    path('tomo/', include(route10.urls)),
    path('vlada/', include(route11.urls)),
    path('agent01/', include(route12.urls)),
    path('agent02/', include(route13.urls)),
    path('agent03/', include(route14.urls)),
    path('agent04/', include(route15.urls)),
    path('agent05/', include(route16.urls)),
    path('agent06/', include(route17.urls)),
    path('agent07/', include(route18.urls)),
    path('agent08/', include(route19.urls)),
    path('agent09/', include(route20.urls)),
    path('agent10/', include(route21.urls)),
    path('vane/', include(route22.urls)),
   
]
