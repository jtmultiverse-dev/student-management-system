import {
    Alert,
    Card,
    Col,
    Row,
    Statistic,
    Table,
    Tag,
} from "antd";

import {
    BankOutlined,
    BookOutlined,
    TeamOutlined,
} from "@ant-design/icons";

import {
    useGetFacultiesQuery,
    useGetStudentsQuery,
} from "../services/studentsApi.js";

function DashboardPage() {
    const {
        data: studentsResponse,
        isLoading: isStudentsLoading,
        isError: isStudentsError,
        error: studentsError,
    } = useGetStudentsQuery();

    const {
        data: facultiesResponse,
        isLoading: isFacultiesLoading,
        isError: isFacultiesError,
        error: facultiesError,
    } = useGetFacultiesQuery();

    const students = studentsResponse?.data ?? [];
    const faculties = facultiesResponse?.data ?? [];

    const coursesCount = new Set(
        students
            .map((student) => student.course)
            .filter(Boolean)
    ).size;

    const latestStudents = students.slice(0, 5);

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
            title: "Course",
            dataIndex: "course",
            key: "course",
            render: (course) => (
                <Tag color="blue">
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
            title: "Created",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt) =>
                createdAt
                    ? new Date(createdAt).toLocaleDateString("ka-GE")
                    : "—",
        },
    ];

    const hasError =
        isStudentsError || isFacultiesError;

    const errorMessage =
        studentsError?.data?.message ??
        facultiesError?.data?.message ??
        "Failed to load dashboard data";

    return (
        <section>
            <h1>Dashboard</h1>

            {hasError && (
                <Alert
                    type="error"
                    message={errorMessage}
                    showIcon
                    style={{ marginBottom: 24 }}
                />
            )}

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12} xl={8}>
                    <Card>
                        <Statistic
                            title="Total students"
                            value={students.length}
                            prefix={<TeamOutlined />}
                            loading={isStudentsLoading}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12} xl={8}>
                    <Card>
                        <Statistic
                            title="Total faculties"
                            value={faculties.length}
                            prefix={<BankOutlined />}
                            loading={isFacultiesLoading}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12} xl={8}>
                    <Card>
                        <Statistic
                            title="Active courses"
                            value={coursesCount}
                            prefix={<BookOutlined />}
                            loading={isStudentsLoading}
                        />
                    </Card>
                </Col>
            </Row>

            <Card
                title="Latest students"
                style={{ marginTop: 24 }}
            >
                <Table
                    columns={columns}
                    dataSource={latestStudents}
                    rowKey="id"
                    loading={isStudentsLoading}
                    pagination={false}
                    bordered
                    scroll={{ x: 800 }}
                    locale={{
                        emptyText: "Students not found",
                    }}
                />
            </Card>
        </section>
    );
}

export default DashboardPage;