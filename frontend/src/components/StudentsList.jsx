import { Button, Space, Table, Tag } from "antd";

function StudentsList({
    students,
    onEdit,
    onDelete,
    isDeleting,
}) {
    const columns = [
        {
            title: "Student",
            key: "student",
            render: (_, student) => (
                <strong>
                    {student.firstName} {student.lastName}
                </strong>
            ),
        },
        {
            title: "Student number",
            dataIndex: "studentNumber",
            key: "studentNumber",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Course",
            dataIndex: "course",
            key: "course",
            render: (course) => (
                <Tag color="purple">
                    Course {course}
                </Tag>
            ),
        },
        {
            title: "Faculty",
            key: "faculty",
            render: (_, student) =>
                student.faculty?.name ?? "No faculty",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, student) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => onEdit(student)}
                    >
                        Edit
                    </Button>

                    <Button
                        danger
                        loading={isDeleting}
                        onClick={() => onDelete(student)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={students}
            rowKey="id"
            bordered
            pagination={{
                pageSize: 5,
                showSizeChanger: false,
            }}
            locale={{
                emptyText: "Students not found",
            }}
            scroll={{
                x: 900,
            }}
        />
    );
}

export default StudentsList;