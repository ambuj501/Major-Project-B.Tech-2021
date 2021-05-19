import sys
#x = int(sys.argv[1])
x = int(2)
import pandas as pd
import numpy as np

from statsmodels.tsa.arima.model import ARIMA

series = np.array([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])

model = ARIMA(series, order=(5,1,0))
model_fit = model.fit()

model_fit.save('model1.pkl')

output  = model_fit.forecast(x)

for i in output:
  print(round(i))





