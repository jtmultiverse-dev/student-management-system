import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Select,
    Space,
} from "antd";

import { Controller } from "react-hook-form";

const labelStyle = {
    display: "block",
    marginBottom: 6,
    fontWeight: 500,
};

const errorStyle = {
    color: "#ff4d4f",
    fontSize: 13,
    marginTop: 4,
};

function FieldError({ error }) {
    if (!error) {
        return null;
    }

    return (
        <div style={errorStyle}>
            {error.message}
        </div>
    );
}

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
                    {/* First name */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="firstName"
                                        placeholder="Enter first name"
                                        status={
                                            errors.firstName
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={errors.firstName}
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Last name */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="lastName"
                                        placeholder="Enter last name"
                                        status={
                                            errors.lastName
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={errors.lastName}
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Email */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="email"
                                        type="email"
                                        placeholder="student@example.com"
                                        status={
                                            errors.email
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={errors.email}
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Student number */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="studentNumber"
                                        placeholder="STU-0001"
                                        status={
                                            errors.studentNumber
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={
                                            errors.studentNumber
                                        }
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Course */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="course"
                                        type="number"
                                        min={1}
                                        max={6}
                                        placeholder="Enter course"
                                        status={
                                            errors.course
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={errors.course}
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Phone */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="phone"
                                        type="tel"
                                        placeholder="+995..."
                                        status={
                                            errors.phone
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={errors.phone}
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Date of birth */}
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
                                <>
                                    <Input
                                        {...field}
                                        id="dateOfBirth"
                                        type="date"
                                        status={
                                            errors.dateOfBirth
                                                ? "error"
                                                : ""
                                        }
                                    />

                                    <FieldError
                                        error={
                                            errors.dateOfBirth
                                        }
                                    />
                                </>
                            )}
                        />
                    </Col>

                    {/* Faculty */}
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
                                <>
                                    <Select
                                        id="facultyId"
                                        value={
                                            field.value ||
                                            undefined
                                        }
                                        onChange={
                                            field.onChange
                                        }
                                        onBlur={field.onBlur}
                                        options={
                                            facultyOptions
                                        }
                                        placeholder="Select faculty"
                                        loading={
                                            isFacultiesLoading
                                        }
                                        disabled={
                                            isFacultiesLoading
                                        }
                                        showSearch
                                        optionFilterProp="label"
                                        allowClear
                                        status={
                                            errors.facultyId
                                                ? "error"
                                                : ""
                                        }
                                        style={{
                                            width: "100%",
                                        }}
                                    />

                                    <FieldError
                                        error={
                                            errors.facultyId
                                        }
                                    />
                                </>
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