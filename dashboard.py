import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(page_title='GPU prices dashboard', page_icon='💻', layout='wide')
st.title('GPU Prices Dashboard')

col1, col2, col3, col4 = st.columns(4)
cola, colb = st.columns(2)

gpu_df = pd.read_csv('gpu_specs_prices.csv')

brandcount_df = gpu_df.groupby('brand').size()
brandcount_df = brandcount_df.sort_values(ascending=False)
brandcount_df = brandcount_df.reset_index()

brandcount_df = brandcount_df.rename(columns={0: 'count'})

figbrandcount = px.pie(brandcount_df, values='count', names='brand', title='Number of GPU product listings per brand', color_discrete_sequence=px.colors.sequential.Blues_r)

with st.container():
  col1.metric(label='Number of products', value=len(gpu_df))
  col2.metric(label='Number of brands', value=len(brandcount_df))
  col3.metric(label='Average price', value=f"₱ {gpu_df['price'].mean().round(2)}")
  col4.metric(label='Median price', value=f"₱ {gpu_df['price'].median().round(2)}")



brandavgprice_df = gpu_df.groupby('brand')['price'].mean(numeric_only=True)
brandavgprice_df = brandavgprice_df.sort_values(ascending=True)

modelavgprice_df = gpu_df.groupby('model')['price'].mean(numeric_only=True)
modelavgprice_df = modelavgprice_df.sort_values(ascending=False)


modelcount_df = gpu_df.groupby('model').size()
modelcount_df = modelcount_df.reset_index()

modelcount_df = modelcount_df.rename(columns={0: 'count'})
modelcount_df = modelcount_df.sort_values(by='count', ascending=False)

figmodelcount = px.bar(modelcount_df, x='model', y='count', title='Number of items per model')

figbrandavgprice = px.bar(brandavgprice_df, x='price', title='Average prices per brand')

figmodelavgprice = px.bar(modelavgprice_df, title='Average prices per model')

figpricedist = px.histogram(gpu_df, x='price', nbins=30, title='Price distribution of all items')
figpricedist.update_traces(marker_line_width=1, marker_line_color="white")


with cola:
  st.plotly_chart(figbrandcount, theme='streamlit')
  NExpensive = st.slider('Select number of items', 1, int(len(gpu_df)/2), 10, key='expensive')
  figtopNExpensive = px.bar(gpu_df.nlargest(int(NExpensive), 'price').sort_values(ascending=True, by='price'), x='price', y='name', title=f'Top {NExpensive} most expensive items')
  figtopNExpensive.update_layout(minreducedheight=500, height=700)
  st.plotly_chart(figtopNExpensive, theme='streamlit')
  st.plotly_chart(figmodelcount, theme='streamlit')

with colb:
  st.plotly_chart(figbrandavgprice, theme='streamlit')
  NCheapest = st.slider('Select number of items', 1, int(len(gpu_df)/2), 10, key='cheapest')
  figtopNCheapest = px.bar(gpu_df.nsmallest(int(NCheapest), 'price').sort_values(ascending=False, by='price'), x='price', y='name', title=f'Top {NCheapest} most affordable items')
  figtopNCheapest.update_layout(minreducedheight=500, height=700)
  st.plotly_chart(figtopNCheapest, theme='streamlit')
  st.plotly_chart(figmodelavgprice, theme='streamlit')

st.plotly_chart(figpricedist, theme='streamlit', use_container_width=True)
modeloptions = st.multiselect('Select model', modelcount_df['model'], modelcount_df['model'])

figscatterbrandpricemodel = px.scatter(gpu_df.loc[gpu_df['model'].isin(modeloptions)], x='brand', y='price', color='model', hover_data=['name', 'memory size', 'memory type'], title='All items', height=750)
figscatterbrandpricemodel.update_traces(marker_size=20)

st.plotly_chart(figscatterbrandpricemodel, theme='streamlit', use_container_width=True)
st.write('You can check this project on [Github](https://github.com/dyitsme/gpu_specs_prices_dashboard).')