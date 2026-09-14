import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Space,
} from "antd";

const labelStyle = {
    display: "block",
    marginBottom: 6,
    fontWeight: 500,
};

function FacultyForm({
    formData,
    isEditing,
    fieldErrors,
    validationErrors,
    isSaving,
    onChange,
    onSubmit,
    onCancelEdit,
}) {
    const nameError =
    validationErrors?.name?.[0] ??
    fieldErrors?.name?.[0];

const codeError =
    validationErrors?.code?.[0] ??
    fieldErrors?.code?.[0];
    
    return (
        <Card
            title={isEditing ? "Edit faculty" : "Add faculty"}
            style={{ marginBottom: 24 }}
        >
            <form onSubmit={onSubmit}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <label
                            htmlFor="facultyName"
                            style={labelStyle}
                        >
                            Faculty name
                        </label>

                        <Input
                            id="facultyName"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            placeholder="Enter faculty name"
                            required
                        />
                        {validationErrors?.name?.[0] && (
                            <div style={{ color: "red", marginTop: 4 }}>
                                {validationErrors.name[0]}
                            </div>
                        )}

                        {nameError && (
                            <div style={{ color: "red", marginTop: 4 }}>
                                {nameError}
                            </div>
                        )}
                    </Col>

                    <Col xs={24} md={12}>
                        <label
                            htmlFor="facultyCode"
                            style={labelStyle}
                        >
                            Faculty code
                        </label>

                        <Input
                            id="facultyCode"
                            name="code"
                            value={formData.code}
                            onChange={onChange}
                            placeholder="Example: IT"
                            required
                        />
                        {validationErrors?.code?.[0] && (
                            <div style={{ color: "red", marginTop: 4 }}>
                                {validationErrors.code[0]}
                            </div>
                        )}
                        {codeError && (
                            <div style={{ color: "red", marginTop: 4 }}>
                                {codeError}
                            </div>
                        )}
                    </Col>
                </Row>

                <Space style={{ marginTop: 24 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSaving}
                    >
                        {isEditing
                            ? "Save changes"
                            : "Create faculty"}
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

export default FacultyForm;