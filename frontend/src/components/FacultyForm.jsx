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
    isSaving,
    onChange,
    onSubmit,
    onCancelEdit,
}) {
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