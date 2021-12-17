# Load tests

I did run some load tests with k6.

## Flexible

I wasn't able with the free subscription to put enough load on the service so that it
actually scales up. The service was directly reacting to load.

![Flexible](./img/flexible.png)

## Standard

The same holds up for the standard one. The only difference was that the very initial call
took the startup time of 1s. After that the service was super fast in responding and only
needed 1 instance for the whole load.

![Standard](./img/standard.png)
![Standard2](./img/standard2.png)

## Cloud Function

As expected Cloud functions scale as good as the standard one, same bahaviour, it needed a little startup
time for the first call. It actually scaled up to 14 parallel instances.

![Functions](./img/function.png)
![Functions2](./img/function2.png)
![Functions3](./img/function3.png)

## Cloud Run

Cloud Run is in the end compareable with App Engine Flexible.

![Functions](./img/cloudrun.png)
![Functions](./img/cloudrun2.png)
