From flask import Flask, request, jsonify
Import sqlite3
App=Flask(__name__)
Def init_db():
 Conn=sqlite3.connect('students.db')
 Cursor=conn.cursor()
 Cursor.execute('"
  CREATE TABLE IF NOT EXISTS students(
   Id INTEGER PRIMARY KEY AUTOINCREMENT,
   Name TEXT NOT NULL,
   Email TEXT NOT NULL,
   Age INTEGER
  )
 '")
 Conn.commit()
 Conn.close()
@app.route('/students',methods=['POST'])
Def insert_student():
 Data=request.get_json()
 Conn=sqlite3.connect('students.db')
 Cursor=conn.cursor()
 Cursor.execute(
  'INSERT INTO students(name,email,age)VALUES(?,?,?)',
  (data['name'],date['email'],data.get('age',0))
 )
  Conn.commit()
  Student_id=cursor.lastrowid
  Conn.close()
  Return jsonify({"message":"Student created","id":student_id}),201
@app.route('/students',methods=['GET'])
Def get_students():
  Conn=sqlite3.connect('students.db')
  Cursor=conn.cursor()
  Cursor.execute('SELECT*FROM students')
  Rows=cursor.fetchall()
  Conn.close()
  Students=[{"id":r[0],"name":r[1],"email":r[2],"age":r[3]}for r in rows]
  Return jsonify(students)
@app.route('/students/<int:student_id>',methods=['GET'])
Def get_student(student_id):
  Conn=sqlite3.connect('students.db')
  Cursor=conn.cursor()
  Cursor.execute('SELECT*FROM students WHERE id=?',(student_id,))
  Row=cursor.fetchone()
  Conn.close()
  If row is None:
     Return jsonify({"error":"Student not Found"}),404
     Return jsonify({"id":row[0],"name":row[1],"email":row[2],"age":row[3]})
@app.route('/students/<int:student_id>',methods=['PUT'])
Def update_student(student_id):
 Data=request.get_json()
 Conn=sqlite3.connect('students.db')
 Cursor=conn.cursor()
 Cursor.execute(
  'UPDATE students SET name=?,email=?,age=?WHERE id=?',
  (date['name'],date['email'],data.get('age',0),student_id)
 )
 Conn.commit()
 If cursor.rowcount==0:
    Conn.close()
    Return jsonify({"error":"Student noy found"}),404
 Conn.close()
 Return jsonify({"message":"Student updated"})
@app.route('/students/<int:student_id>',methods=['DELETE'])
Def delete_student(student_id):
 Conn=sqlite3.connect('students.db')
 Cursor=conn.cursor()
 Cursor.execute('DELETE FROM students WHERE id=?',(student_id,))
 Conn.commit()
 If cursor.rowcount==0:
    Conn.close()
    Return jsonify({"error":"Student not found"}),404
 Conn.close()
 Return jsonify({"message":"Student deleted"})
If__name__=='__main__':
  Init_db()
  App.run(debug=True)
