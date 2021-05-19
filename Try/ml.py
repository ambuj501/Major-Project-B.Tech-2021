import sys
x = int(sys.argv[1])
#x = int(10)
#from statsmodels.tsa.arima_model import ARIMAResults

#ARIMA = ARIMAResults.load('model.pkl')


#output  = ARIMA.forecast(x)
output = [88,82,83,76,71,73,76,81,82,89,85,91,100,106,93,96,103,85,87,88,94,82,84,86]

for i in output:
  print(round(i), end = " ")

