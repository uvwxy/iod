import cherrypy
import jsonpickle as jp


class ControlApi():
  @cherrypy.expose
  def trigger1(self):
    print "Trigger"
    result = {"result": "success"}

    return jp.encode(result, unpicklable=False)
