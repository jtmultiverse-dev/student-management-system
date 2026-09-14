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

import { Controller } from "react-hook-form";

function StudentForm({
    control,
    errors,
    faculties,
    isEditing,
    isSaving,
    isFacultiesLoading,
    onSubmit,
    onCancelEdit,
}) {
    const facultyOptions = faculties.map((faculty) => ({
        value: String(faculty.id),
        label: faculty.name,
    }));

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

                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="firstName"
                                    placeholder="Enter first name"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="lastName"
                            style={labelStyle}
                        >
                            Last name
                        </label>

                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="lastName"
                                    placeholder="Enter last name"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="email"
                            style={labelStyle}
                        >
                            Email
                        </label>

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="email"
                                    type="email"
                                    placeholder="student@example.com"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="studentNumber"
                            style={labelStyle}
                        >
                            Student number
                        </label>

                        <Controller
                            name="studentNumber"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="studentNumber"
                                    placeholder="STU-0001"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="course"
                            style={labelStyle}
                        >
                            Course
                        </label>

                        <Controller
                            name="course"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="course"
                                    type="number"
                                    min={1}
                                    placeholder="Enter course"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="phone"
                            style={labelStyle}
                        >
                            Phone
                        </label>

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="phone"
                                    type="tel"
                                    placeholder="+995..."
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="dateOfBirth"
                            style={labelStyle}
                        >
                            Date of birth
                        </label>

                        <Controller
                            name="dateOfBirth"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="dateOfBirth"
                                    type="date"
                                />
                            )}
                        />
                    </Col>

                    <Col xs={24} md={12} xl={8}>
                        <label
                            htmlFor="facultyId"
                            style={labelStyle}
                        >
                            Faculty
                        </label>

                        <Controller
                            name="facultyId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    id="facultyId"
                                    value={field.value || undefined}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    options={facultyOptions}
                                    placeholder="Select faculty"
                                    loading={isFacultiesLoading}
                                    disabled={isFacultiesLoading}
                                    showSearch
                                    optionFilterProp="label"
                                    allowClear
                                    style={{ width: "100%" }}
                                />
                            )}
                        />
                    </Col>
                </Row>

                <Space style={{ marginTop: 24 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSaving}
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