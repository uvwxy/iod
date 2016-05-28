import cherrypy
import jsonpickle as jp
import random


class Entry:
  x = 0
  y = 0

  def __init__(self, x, y):
    self.x = x
    self.y = y


class LineChartData:
  values = []
  key = "Cosine Wave"
  color = "#2ca02c"

  def __init__(self, key, color = "#2ca02c", values=[]):
    self.key = key
    self.color = color
    self.values = values


class LineChartApi:
  @cherrypy.expose
  def data(self):
    lcd = LineChartData("MyData");

    lcd.values = [];
    for i in range(1,100):
      lcd.values.append(Entry(i,random.random()))


    result = [lcd]
    return jp.encode(result, unpicklable=False)

  @cherrypy.expose
  def config(self):
    result = {
      "chart": {"type": "lineChart", "height": 450, "margin": {"top": 20, "right": 20, "bottom": 40, "left": 55},
                "useInteractiveGuideline": True, "dispatch": {}, "xAxis": {"axisLabel": "Time (ms)"},
                "yAxis": {"axisLabel": "Voltage (v)", "axisLabelDistance": -10}},
      "title": {"enable": True, "text": "Title for Line Chart"}}
    return jp.encode(result, unpicklable=False)
