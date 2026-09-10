import {
    Button,
    Card,
    Space,
    Table,
    Tag,
} from "antd";

function FacultiesList({
    faculties,
    isLoading,
    onEdit,
    onDelete,
    isDeleting,
}) {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "Faculty name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Faculty code",
            dataIndex: "code",
            key: "code",
            render: (code) => (
                <Tag color="blue">
                    {code}
                </Tag>
            ),
        },
        {
            title: "Created",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt) =>
                createdAt
                    ? new Date(createdAt).toLocaleDateString("ka-GE")
                    : "—",
        },
        {
            title: "Actions",
            key: "actions",
            width: 120,
            render: (_, faculty) => (
                <Space>
                <Button
                    type="primary"
                    onClick={() => onEdit(faculty)}
                >
                    Edit
                </Button>

                <Button
                    danger
                    loading={isDeleting}
                    onClick={() => onDelete(faculty)}
                    >
                        Delete
                    </Button>
                    </Space>
            ),
        },
    ];

    return (
        <Card title="Faculty list">
            <Table
                columns={columns}
                dataSource={faculties}
                rowKey="id"
                loading={isLoading}
                bordered
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                }}
                locale={{
                    emptyText: "Faculties not found",
                }}
            />
        </Card>
    );
}

export default FacultiesList;