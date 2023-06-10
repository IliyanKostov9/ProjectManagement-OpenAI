import { getProjectNameState } from '../states';
import { FileUploader } from '@aws-amplify/ui-react';
import React from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { ProjectContext } from '../contexts/ProjectContext';

export function EditTicketFunc (props) {

    const {
        ticketID,
        title,
        description,
        comment,
        handleDescription,
        handleComment,
        handleCloseEditTicketClick,
        handleSaveEditTicketClick,
        isTitleEmpty,
        handleTitle,
        handleMoreOptionsChange,
        handleAddUserToWatch,
        handleSafeTicketImageChange,
        moreOptions,
        watchedCount,
        watchedAddMeVariant,
        isLoading,
    } = React.useContext(TicketContext);

    const {
        imageProjectURL,
    } = React.useContext(ProjectContext);

    const EditTicketOverride={
        project_name_text:{
            children: getProjectNameState()
        },
        ticket_id_text: {
            children: "KAI-"+ticketID
        },
        title_text_field:{
            isRequired: true,
            hasError: isTitleEmpty,
            value: title,
            errorMessage: "Title must not be empty!",
            onChange: (event) => (handleTitle(event)),
        },
        description_text_field:{
            value: description,
            onChange: (event) => (handleDescription(event)),
        },
        comments_text_field:{
            value: comment,
            onChange: (event) => (handleComment(event)),
        },
        project_image_name:{
            src: imageProjectURL
        },
        cancel_button:{
            onClick: (event) => (handleCloseEditTicketClick(event)),
        },
        create_button:{
            onClick: (event) => (handleSaveEditTicketClick(event)),
            isLoading: isLoading
        },
        more_options_select_field:{
            onChange : (event) => (handleMoreOptionsChange(event)),
            options: moreOptions
        },
        watch_image:{
            onClick: (event) => (handleAddUserToWatch(event)),
        },
        watch_badge:{
            children: watchedCount,
            variation: watchedAddMeVariant
        }}

        function FileImageTicketUpload () {
        return (
            <FileUploader
            shouldAutoProceed={false}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="public"
            maxFileCount={10}
            isResumable={true}
            showImages={false}
            onSuccess={(event) =>{handleSafeTicketImageChange(event.key);}}/>)} 

    return {
        EditTicketOverride,
        FileImageTicketUpload
    }}