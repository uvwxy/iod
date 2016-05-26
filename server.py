#!/usr/bin/python
import cherrypy
import os
import simplejson
from cherrypy import tools

webappDir = os.path.join(os.path.abspath("."), u"dist")


class Server(object):
  @cherrypy.expose
  @cherrypy.tools.json_out()
  @cherrypy.tools.json_in()
  def lineChartConfig(self):
    return {"chart": {"type": "lineChart", "height": 450, "margin": {"top": 20, "right": 20, "bottom": 40, "left": 55},
                      "useInteractiveGuideline": True, "dispatch": {}, "xAxis": {"axisLabel": "Time (ms)"},
                      "yAxis": {"axisLabel": "Voltage (v)", "axisLabelDistance": -10}},
            "title": {"enable": True, "text": "Title for Line Chart"}}


# server start and configuration
conf = {
  '/':
    {'tools.staticdir.on': True,
     'tools.staticdir.dir': webappDir,
     },
  'global': {
    'server.socket_host': '0.0.0.0',
    'server.socket_port': 8080,
  }
}

cherrypy.quickstart(Server(), "/", config=conf)
