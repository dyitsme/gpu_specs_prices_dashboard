# GPU prices dashboard

## About the project

<img src="../gpu_prices/assets/screenshot.png">

With so many graphics cards to choose from, it can be difficult for customers to find one that fits with their budget. This app collected graphics cards product information from the PC Express website. It then displays a dashboard that shows a general overview of the number of graphics cards listed and their respective prices. 

The website can be accessed in https://gpu-dashboard.onrender.com/. This app was built using [Python](https://www.python.org/), [Streamlit](https://streamlit.io/), [Render](https://render.com/), [Jupyter Lab](https://jupyter.org/), and [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/)

## Getting started

### Running the app locally

1. Clone the repository
```
git clone https://github.com/dyitsme/gpu_specs_prices_dashboard
```

2. Create a virtual environment
```
venv gpu_prices
```

3. Activate the virtual environment
```
cd Scripts
```
```
.\activate
```

4. Install Python libraries
```
pip install -r requirements.txt
```

5. Go to the app's working directory and run the app
```
streamlit run dashboard.py
```