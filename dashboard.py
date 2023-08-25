import streamlit as st
import pandas as pd
import plotly.express as px
from matplotlib import pyplot as plt 

st.set_page_config(layout='wide')
st.title('💻PC Express Graphics Cards Dashboard')

col1, col2 = st.columns(2)

df = pd.read_csv('gpu_specs_prices.csv')

brandcount = df.groupby('brand').size()
brandcount = brandcount.sort_values(ascending=False)
brandcount = brandcount.reset_index()

brandcount = brandcount.rename(columns={0: 'count'})

figbrandcount = px.pie(brandcount, values='count', names='brand', title='Number of GPUs per brand')


brandavgprice = df.groupby('brand')['price'].mean(numeric_only=True)
brandavgprice = brandavgprice.sort_values(ascending=True)

figbrandavgprice = px.bar(brandavgprice, x='price')
figbrandavgprice.update_traces(marker_color='#f5054f')

scatterbrandprice = px.scatter(df, x='brand', y='price', color='memory size')

scatterbrandpricetype = px.scatter(df, x='brand', y='price', color='model')


with col1:
  st.plotly_chart(figbrandcount, theme='streamlit')
  st.plotly_chart(scatterbrandprice, theme='streamlit')

with col2:
  st.plotly_chart(figbrandavgprice, theme='streamlit')
  st.plotly_chart(scatterbrandpricetype, theme='streamlit')
