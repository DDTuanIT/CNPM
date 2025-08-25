import pyodbc

conn = pyodbc.connect(
    "DRIVER={ODBC Driver 18 for SQL Server};"
    "SERVER=127.0.0.1,1434;"
    "DATABASE=FlaskApiDB;"
    "UID=sa;"
    "PWD=Aa@123456;"
    "Encrypt=no;"
)
cursor = conn.cursor()
cursor.execute("SELECT DB_NAME();")
print("✅ Connected to:", cursor.fetchone()[0])
conn.close()
