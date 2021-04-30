# ADS Frontend

### Description

This is the React frontend for the ADS api. This is where the UI is defined for the project. It queries the ADS api with `fetch` to retrieve/update/delete information for patient, employee, drug, etc..

**Note** a pre-built bundle is already included in the ADS servlet.

### Creating a bundle

1. Clone the repo
```
git clone https://github.com/jackhenry/ads-frontend.git
cd ads-frontend
```

2. Install the dependencies
```
yarn install
```

3. Bundle the project into a static JS file
```
yarn build
```

4. Copy into the webapp folder of the ADS servlet
```
cp dist/* path/to/ads/src/main/webapp/
```

5. Done