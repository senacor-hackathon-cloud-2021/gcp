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
