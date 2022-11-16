import sys
import pyupbit

def setApiKey(access, secret):
    upbit = pyupbit.Upbit(access, secret)
    return upbit

if __name__ == '__main__':
    setApiKey(sys.argv[1], sys.argv[2])

 