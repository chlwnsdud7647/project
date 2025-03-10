import React, { useState, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean; // 모달 열림 상태
    onClose: () => void; // 모달 닫기 함수
    onSave?: (title: string, content: string) => void; // 저장 함수 추가
    title?: string; // 제목
    content?: string; // 내용
    children?: React.ReactNode; // 모달 내용
}

const PageModal = (props: ModalProps) => {
    const { isOpen, onClose, onSave, title = '', content = '' } = props;

    // 모달 내부의 새로운 제목과 내용 상태 관리
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    // 모달이 열릴 때마다 title과 content를 newTitle과 newContent로 업데이트
    useEffect(() => {
        if (isOpen) {
            setNewTitle(title);
            setNewContent(content);
        }
    }, [isOpen, title, content]);

    if (!isOpen) return null;

    const handleSave = () => {
        if (onSave) {
            onSave(newTitle, newContent);
        }
        setNewTitle(''); // 상태 초기화
        setNewContent('');
        onClose(); // 모달 닫기
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 부모요소를 따라 닫힘 방지
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
                >
                    ✖
                </button>

                {/* 모달 내용 */}
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="일정제목을 입력해주세요"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="border rounded w-full p-2 mt-3"
                    />
                    <textarea
                        placeholder="일정내용을 입력해주세요"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="border rounded w-full p-2 mt-3"
                        rows={5}
                    />
                </div>

                {/* 저장 버튼 */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleSave}
                        className="py-2 px-4 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        저장
                    </button>
                    <button
                        onClick={onClose}
                        className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageModal;
