import { useParams } from "next/navigation";
import React from "react";

const useConversation = () => {
    const params = useParams();
    const conversationId = React.useMemo(() => {
        if(!params.conversationId) {
            return ""; 
        }

        return params.conversationId as string;
    }, [params?.conversationId])

    const isOpen = React.useMemo(() => !!conversationId, [conversationId])

    return React.useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen,  conversationId]);
}

export default useConversation