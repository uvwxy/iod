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
    def test(self):
        return {"test":"test"}


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
