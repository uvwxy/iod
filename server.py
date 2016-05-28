#!/usr/bin/python
import cherrypy
import os
from pyod.api.control import ControlApi
from pyod.api.linechart import LineChartApi

# Configure server.
webappDir = os.path.join(os.path.abspath("."), u"dist")
serverConfig = {
  'global': {
    'server.socket_host': '0.0.0.0',
    'server.socket_port': 8080,
  },
  '/':
    {'tools.staticdir.on': True,
     'tools.staticdir.dir': webappDir,
     }
}


class Api():
  linechart = LineChartApi()
  control = ControlApi()

  def index(self):
    raise cherrypy.HTTPRedirect("/index.html")

  index.exposed = True


# Join defined APIs.
class Site():
  api = Api()

  def index(self):
    raise cherrypy.HTTPRedirect("/index.html")

  index.exposed = True


cherrypy.quickstart(Site(), "/", config=serverConfig)
