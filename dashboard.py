import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(layout='wide')
st.title('💻PC Express Graphics Cards Dashboard')

col1, col2, col3, col4 = st.columns(4)
cola, colb = st.columns(2)

gpu_df = pd.read_csv('gpu_specs_prices.csv')

brandcount_df = gpu_df.groupby('brand').size()
brandcount_df = brandcount_df.sort_values(ascending=False)
brandcount_df = brandcount_df.reset_index()

brandcount_df = brandcount_df.rename(columns={0: 'count'})

figbrandcount = px.pie(brandcount_df, values='count', names='brand', title='Number of GPU product listings per brand')

with st.container():
  col1.metric(label='Number of products', value=len(gpu_df))
  col2.metric(label='Number of brands', value=len(brandcount_df))
  col3.metric(label='Average price', value=f"₱ {gpu_df['price'].mean().round(2)}")
  col4.metric(label='Median price', value=f"₱ {gpu_df['price'].median().round(2)}")



brandavgprice_df = gpu_df.groupby('brand')['price'].mean(numeric_only=True)
brandavgprice_df = brandavgprice_df.sort_values(ascending=True)
topNExpensiveModels_df = gpu_df.groupby(['model', 'memory size', 'memory type'])['price'].mean()
topNCheapestModels_df = topNExpensiveModels_df

topNExpensiveModels_df = topNExpensiveModels_df.reset_index()
topNCheapestModels_df = topNCheapestModels_df.reset_index()
pivotexpensive = pd.pivot_table(data=topNExpensiveModels_df, index=['model'], columns=['memory type', 'memory size'], values='price')
pivotcheapest = pd.pivot_table(data=topNCheapestModels_df, index=['model'], columns=['memory type', 'memory size'], values='price')

figbrandavgprice = px.bar(brandavgprice_df, x='price', title='Average prices per brand')
# figbrandavgprice.update_traces(marker_color='#f5054f')

figpricedist = px.histogram(gpu_df, x='price', nbins=30, title='Price distribution of all items')
figpricedist.update_traces(marker_line_width=1,marker_line_color="white")
figtopNExpensive = px.bar(gpu_df.nlargest(10, 'price').sort_values(ascending=True, by='price'), x='price', y='name', title='Top 10 most expensive items')
figtopNCheapest = px.bar(gpu_df.nsmallest(10, 'price').sort_values(ascending=False, by='price'), x='price', y='name', title='Top 10 most affordable items')
# figtopNExpensiveModels = px.bar(pivotexpensive)
# figtopNCheapestModels = px.bar(pivotcheapest)


figscatterbrandpricemodel = px.scatter(gpu_df, x='brand', y='price', color='model', hover_data=['name', 'memory size', 'memory type'], title='All items', height=750)
figscatterbrandpricemodel.update_traces(marker_size=20)
with cola:
  st.plotly_chart(figbrandcount, theme='streamlit')
  st.plotly_chart(figpricedist, theme='streamlit')
  st.plotly_chart(figtopNExpensive, theme='streamlit')
  pivotcheapest
  
with colb:
  st.plotly_chart(figbrandavgprice, theme='streamlit')
  st.plotly_chart(figtopNCheapest, theme='streamlit')
  gpu_df
  pivotexpensive
  # st.plotly_chart(figtopNCheapestModels)

st.plotly_chart(figscatterbrandpricemodel, theme='streamlit', use_container_width=True)

# scatterbrandprice = px.scatter(df, x='brand', y='price', color='memory size')

# scatterbrandpricetype = px.scatter(df, x='brand', y='price', color='model')


# with col1:
#   st.plotly_chart(figbrandcount, theme='streamlit')
#   st.plotly_chart(scatterbrandprice, theme='streamlit')

# with col2:
#   st.plotly_chart(figbrandavgprice, theme='streamlit')
#   st.plotly_chart(scatterbrandpricetype, theme='streamlit')
