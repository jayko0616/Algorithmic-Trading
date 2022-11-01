from matplotlib import ticker
import pyupbit
import matplotlib.pyplot as plt
from mpl_finance import candlestick2_ohlc
c = 'XRP'
df = pyupbit.get_ohlcv(ticker="KRW-"+c, interval="day", count=100)

fig = plt.figure(figsize=(20,10))
ax = fig.add_subplot(111)
# ax.xaxis.set_major_locator(ticker.MaxNLocator(50))
ax.set_title('Coin_Graph',fontsize=22)
ax.set_xlabel('Date')

candlestick2_ohlc(ax,df['open'],df['high'],df['low'],df['close'],width=0.3,colorup='r',colordown='b')
ax.legend()
plt.grid()
plt.show()
fig.savefig('my_plot'+c+'.png')

