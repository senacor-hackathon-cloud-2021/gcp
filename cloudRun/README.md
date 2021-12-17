# Cloud Run

I initially deployed the first CLoudRun by just clicking through the UI and following
this Quickstart guide [](https://cloud.google.com/run/docs/quickstarts/prebuilt-deploy).
It was actually quite easy to get this up and running.

After the successful deployment I adopted the external LoadBalancer to accept load via
"https://hackathon.senacor.sebastianneb.de/cloudrun".
I also adopted the default route "https://hackathon.senacor.sebastianneb.de/" to be weighted
between all 4 services on 25% base.
