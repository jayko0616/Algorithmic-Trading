import pyupbit
import pandas as pd

orderbook = pyupbit.get_orderbook("KRW-BTC")
df = pd.DataFrame(orderbook)

print(df)