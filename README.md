# GCP Senacor Cloud Hackathon 2021

Welcome to the Senacor Cloud Container Hackathon 2021 and the corresponding Google Cloud Platform documentation!
Google in special has been evaluated by [Sebastian Neb](https://github.com/schostin).

## Goal

The goal of the Hackathon was to tryout the different serverless / container services on GCP beyond e.g. Kubernetes.
Targets where therefore Cloud Functions, App Engine and Cloud Run. Aspect to consider where the following:

- What container / serverless services are available on Google?
- How does the integration with other Google services look like (VPC, Managed SQL, Secrets Management, IAM, ...)
- Scalability? How is the service reacting to load? How fast does it actually scale beyond what the docs state.
- Authentication (e.g. any OIDC provider like Google, GitHub or Facebook)?
- Integration with Logging / Monitoring with Stackdriver and export to other systems?
- Costs? How much does the service cost? What is the pricing model?
- Custom domains + certificate management? Also including mTLS between the different services (LoadBalancer \*\*\*> Application)?
- Only internal access? No public facing internet access?
- Debugging capabilities? How fast and efficient can a developer debug? Is debugging on production environments possible
  without interfering with e.g data protection?
- Automatic deployment & setup? How good are those services automateable?
- API Management? Canary deployments? A/B testing?

## Service selection

After looking at Googles offerings for container / serverless services, I decided to look further into the following services:

- [App Engine](./appEngine)
- [Cloud Function](./cloudFunction)
- [Cloud Run](./cloudRun)

## Prerequisites

I did setup a Google project beforehand where I activated all needed APIs beforehand. I also deleted the default network
and created a custom VPC.

## Order of tryouts

I started with [App Engine](./appEngine) in general. More specific with [App Engine Flexible](./appEngine/flexible).
After that continued with [App Engine Standard](./appEngine/standard).
Following that I continued with [Cloud Run](./cloudRun) and closed with [Cloud Functions](./cloudFunctions).

Therefore the Readme reading order is:

1. [App Engine](./appEngine)
2. [App Engine Flexible](./appEngine/flexible)
3. [App Engine Standard](./appEngine/standard)
4. [Cloud Run](./cloudRun)
5. [Cloud Functions](./cloudFunctions)
6. [Monitoring and Logging](./monitoring-logging)
7. [Load Test](./loadTest)

## Integration with other google services

All Google services can run with a custom service account and custom permissions. Due to the availabitlty of the metadata
server, you can always receive a short lived access token to access other Google services out of the box.

## Switiching

Due to the fact that you can configure each path of the LoadBalancer to serve a specific path, it is really easy to switch
to another serverless service without interferring with the API. Also Canary tests are easy doable there.
