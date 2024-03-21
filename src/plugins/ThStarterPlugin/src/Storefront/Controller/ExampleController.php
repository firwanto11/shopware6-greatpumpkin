<?php declare(strict_types=1);

namespace ThStarterPlugin\Storefront\Controller;

use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use ThStarterPlugin\Service\EmailService;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Symfony\Component\HttpFoundation\RedirectResponse;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class ExampleController extends StorefrontController
{
    /**
    * @var EmailService
    */
    private $emailService;
    private $systemConfig;

    public function __construct(EmailService $emailService, SystemConfigService $systemConfig)
    {
        $this->emailService = $emailService;
        $this->systemConfig = $systemConfig;
    }

    #[Route(path: '/form', name: 'frontend.example.form', methods: ['GET'])]
    public function showForm(Request $request, SalesChannelContext $context): Response
    {
        return new RedirectResponse('https://forms.gle/wbzxXHfmB72nj84w9');
    }


    #[Route(path: '/example', name: 'frontend.example.example', methods: ['GET'])]
    public function showExample(Request $request, SalesChannelContext $context): Response
    {

        $exampleConfig = $this->systemConfig->get('ThStarterPlugin.config.contactEmail', $context->getSalesChannel()->getId());
        $response = new Response(json_encode($exampleConfig));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

        // $email = 'ficky.irwanto@think11.com';
        // $message = $this->renderView('@ThStarterPlugin/email/contact.html.twig', [
        //     'name' => 'test name'
        // ]);
        // // $message = '
        // //     <p>This is a testing email</p>
        // //     <p>TEST TEST TEST</p>
        // // ';
        // $this->emailService->sendMail([$email => 'Ficky Irwanto'], 'Test sender', 'Test subject', $message, $context);

        // $response = new Response(json_encode($message));
        // $response->headers->set('Content-Type', 'application/json');
        // return $response;
        // // return JsonResponse(["message" => "Hello World!"]);
        // // return $this->renderStorefront('@ThStarterPlugin/storefront/page/example/index.html.twig', [
        // //     'example' => 'Hello world'
        // // ]);
    }

    #[Route(path: '/contact-form', name: 'frontend.contact.form', methods: ['GET', 'POST'])]
    public function contactForm(Request $request, SalesChannelContext $context): Response
    {

        $fake_name = $request->get('name', '');
        $fake_email = $request->get('email', '');
        $fake_message = $request->get('message', '');

        $body = [
            'success' => false
        ];
        if ($fake_name != '' || $fake_email != '' || $fake_message != '') {
            // error honeypot
        }
        else {
            $name = $request->get(md5('name'), '');
            $email = $request->get(md5('email'), '');
            $message = $request->get(md5('message'), '');

            // $email = 'info@greatpumpkinseeds.com';
            $html = $this->renderView('@ThStarterPlugin/email/contact.html.twig', [
                'name' => $name,
                'email' => $email,
                'message' => $message,
            ]);

            $contactEmail = $this->systemConfig->get('ThStarterPlugin.config.contactEmail', $context->getSalesChannel()->getId());
            if (!$contactEmail) $contactEmail = 'info@greatpumpkinseeds.com';
            $contactEmail = explode(',', $contactEmail);


            $toEmail = [];
            foreach($contactEmail as $e) {
                $e = trim($e);
                $toEmail[$e] = $e;
            }

            $body = [
                'toEmail' => $toEmail
            ];

            try {
                $this->emailService->sendMail(
                    $toEmail,
                    $name,
                    'New Contact Form - '.$context->getSalesChannel()->getName(),
                    $html,
                    $context
                );

                $body = [
                    'success' => true,
                    'html' => $html
                ];
            }
            catch(\Exception $e) {
                $body = [
                    'success' => false,
                    'message' => $e->getMessage()
                ];
            }
        }

        $response = new Response(json_encode($body));
        $response->headers->set('Content-Type', 'application/json');
        return $response;


        // $email = 'ficky.irwanto@think11.com';
        // $message = $this->renderView('@ThStarterPlugin/email/contact.html.twig', [
        //     'name' => 'test name'
        // ]);
        // $this->emailService->sendMail([$email => 'Ficky Irwanto'], 'Test sender', 'Test subject', $message, $context);

        // $response = new Response(json_encode($message));
        // $response->headers->set('Content-Type', 'application/json');
        // return $response;

    }
}