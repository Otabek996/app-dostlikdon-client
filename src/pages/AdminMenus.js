import React from 'react';
import AdminLayout from "../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import {connect} from "react-redux";
import {updateState} from "../redux/actions/menusAction";
import {AvForm, AvField, AvRadioGroup, AvRadio} from "availity-reactstrap-validation";

const AdminMenus = (props) => {
    return (
        <AdminLayout>
            <div className="d-flex align-items-center justify-content-between">
                <h5>Menus Page</h5>
                <button type="button" className="btn btn-success" onClick={() => props.updateState({modalOpen: true})}>Add</button>
            </div>

            <Modal isOpen={props.modalOpen}>
                <ModalHeader>
                    <h5>Add Menus</h5>
                </ModalHeader>
                <AvForm>
                    <ModalBody>
                        <AvField name="nameUz" type="text" label="Name Uz" placeholder="Type here"/>
                        <AvField name="nameRu" type="text" label="Name Ru" placeholder="Type here"/>
                        <AvField name="nameEn" type="text" label="Name En" placeholder="Type here"/>

                        <AvRadioGroup inline name="submenu" label="Submenu" required errorMessage="Pick one!">
                            <AvRadio value="true" />
                            <AvRadio value="false" />
                        </AvRadioGroup>

                        <AvField name="parentId" type="text" label="Parent Id"/>
                    </ModalBody>
                </AvForm>
                <ModalFooter></ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        modalOpen: state.menus.modalOpen
    }
};

export default connect(mapStateToProps, {updateState})(AdminMenus);