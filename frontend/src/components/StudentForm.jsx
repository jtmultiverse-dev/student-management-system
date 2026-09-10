import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Select,
    Space,
} from "antd";

const labelStyle = {
    display: "block",
    marginBottom: 6,
    fontWeight: 500,
};

function StudentForm({
    formData,
    faculties,
    isEditing,
    isSaving,
    isFacultiesLoading,
    onChange,
    onSubmit,
    onCancelEdit,
}) {
    const facultyOptions = faculties.map((faculty) => ({
        value: String(faculty.id),
        label: faculty.name,
    }));

    function handleFacultyChange(value) {
        onChange({
            target: {
                name: "facultyId",
                value: value ?? "",
            },
        });
    }

    return (
        <Card
            title={isEditing ? "Edit student" : "Add student"}
            style={{ marginBottom: 24 }}
        >
            <form onSubmit={onSubmit}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="firstName"
                            style={labelStyle}
                        >
                            First name
                        </label>

                        <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={onChange}
                            placeholder="Enter first name"
                            required
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="lastName"
                            style={labelStyle}
                        >
                            Last name
                        </label>

                        <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={onChange}
                            placeholder="Enter last name"
                            required
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="email"
                            style={labelStyle}
                        >
                            Email
                        </label>

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={onChange}
                            placeholder="student@example.com"
                            required
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="studentNumber"
                            style={labelStyle}
                        >
                            Student number
                        </label>

                        <Input
                            id="studentNumber"
                            name="studentNumber"
                            value={formData.studentNumber}
                            onChange={onChange}
                            placeholder="STU-0001"
                            required
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="course"
                            style={labelStyle}
                        >
                            Course
                        </label>

                        <Input
                            id="course"
                            name="course"
                            type="number"
                            min={1}
                            value={formData.course}
                            onChange={onChange}
                            placeholder="Enter course"
                            required
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="phone"
                            style={labelStyle}
                        >
                            Phone
                        </label>

                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={onChange}
                            placeholder="+995..."
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="dateOfBirth"
                            style={labelStyle}
                        >
                            Date of birth
                        </label>

                        <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={onChange}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="facultyId"
                            style={labelStyle}
                        >
                            Faculty
                        </label>

                        <Select
                            id="facultyId"
                            value={formData.facultyId || undefined}
                            onChange={handleFacultyChange}
                            options={facultyOptions}
                            placeholder="Select faculty"
                            loading={isFacultiesLoading}
                            disabled={isFacultiesLoading}
                            showSearch
                            optionFilterProp="label"
                            allowClear
                            style={{ width: "100%" }}
                        />
                    </Col>
                </Row>

                <Space style={{ marginTop: 24 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSaving}
                        disabled={!formData.facultyId}
                    >
                        {isEditing
                            ? "Update student"
                            : "Create student"}
                    </Button>

                    {isEditing && (
                        <Button
                            htmlType="button"
                            onClick={onCancelEdit}
                            disabled={isSaving}
                        >
                            Cancel
                        </Button>
                    )}
                </Space>
            </form>
        </Card>
    );
}

export default StudentForm;