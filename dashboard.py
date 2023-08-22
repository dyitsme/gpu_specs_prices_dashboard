import streamlit as st
import pandas as pd
from matplotlib import pyplot as plt 

st.title('💻PC Express Graphics Cards Dashboard')

df = pd.read_csv('pcexpress.csv')

df2 = df.groupby('brand').size()
df2 = df2.sort_values(ascending=False)

st.bar_chart(df2)

df4 = df.groupby('brand').mean(numeric_only=True)
df4 = df4.sort_values('price', ascending=False)

st.bar_chart(df4)
