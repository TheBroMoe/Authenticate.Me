import sqlite3
from sqlite3 import Error

class DatabaseHander:
    instance = None

    def init(db_file):
        if not (DatabaseHander.instance):
            DatabaseHander.instance = DatabaseHander.__getInstance()
        pass

    def __getInstance(self):
        pass

    def create_connection(db_file):
        conn = None
        try:
            conn = sqlite3.connect(db_file)
        except Error as e:
            print(e)

        return conn

    def create_table(conn, create_table_sql):
        try:
            c = conn.cursor()
            c.execute(create_table_sql)
        except Error as e:
            print(e)

    def create_project(conn, project):

        sql = ''' INSERT INTO projects(phone_num,input,content,QR,id,status,name)
                  VALUES(?,?,?,?,?,?,?) '''
        cur = conn.cursor()
        cur.execute(sql, project)
        return cur.lastrowid


    def delete_all_projects(conn):
        """
        Delete all rows in the tasks table
        :param conn: Connection to the SQLite database
        :return:
        """
        sql = 'DELETE FROM projects'
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()

    def main():
        database = r"C:\sqlite\db\pythonsqlite.db"

        sql_create_projects_table = """ CREATE TABLE IF NOT EXISTS projects (
                                                phone_num text,
                                                input text,
                                                content text,
                                                QR text,
                                                id integer,
                                                status text,
                                                name text
                                            ); """

        # create a database connection
        conn = DatabaseHander.create_connection(database)

        # create tables
        if conn is not None:
            # create projects table
            DatabaseHander.create_table(conn, sql_create_projects_table)

        with conn:
            # create a new project
            project = ('1-555-555-5555', 'input_method', 'content', 'QR code in b64', 420420, 'current_status', 'steven')
            project_id = DatabaseHander.create_project(conn, project)

            # create/delete proj
            # DatabaseHander.delete_all_projects(conn)


if __name__ == '__main__':
    DatabaseHander.main()





